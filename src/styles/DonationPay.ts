import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F2F5FA',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'android' ? 25 : 15,
    paddingBottom: 20,
    width: '100%',
  },
  backButton: {
    padding: 10, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerPlaceholder: {
    width: 44, 
  },
  logoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  redLogo: {
    width: 44,
    height: 44,
    backgroundColor: '#FFF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#EFEFEF',
  },
  logoSymbol: {
    color: '#E53935',
    fontSize: 22,
  },
  organizationName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
  },
  campaignSubtitle: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 12,
    color: '#64748B',
    textTransform: 'uppercase',
  },
  suggestionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  suggestionButton: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: '#CBD5E1',
    borderRadius: 12,
    paddingVertical: 14,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  suggestionButtonSelected: {
    borderColor: '#4F6AF6',
    backgroundColor: '#E9ECFD',
  },
  suggestionText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#475569',
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#EFEFEF',
  },
  currencySymbol: {
    fontSize: 24,
    fontWeight: '700',
    color: '#94A3B8',
    marginRight: 10,
  },
  amountInput: {
    fontSize: 26,
    fontWeight: '600',
    color: '#1E293B',
    flex: 1,
  },
  minimumDonation: {
    fontSize: 12,
    textAlign: 'center',
    color: '#777',
    marginBottom: 25,
  },
  formContainer: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#EFEFEF',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    color: '#64748B',
    fontSize: 12,
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  input: {
    fontSize: 16,
    paddingVertical: 10,
    color: '#1E293B',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  donateButton: {
    backgroundColor: '#4F6AF6',
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: 'center',
    width: '100%',
    shadowColor: '#4F6AF6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  donateButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
  },
});